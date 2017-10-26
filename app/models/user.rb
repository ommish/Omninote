class User < ApplicationRecord
  validates :email, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :valid_email

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :notebooks, dependent: :destroy
  has_many :notes, through: :notebooks

  def valid_email
    if !email.include?("@") && email != ""
      errors[:base] << "Email is invalid"
    end
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token = User.generate_token
  end

  def reset_session_token!
    self.session_token = User.generate_token
    self.save!
    self.session_token
  end

end
