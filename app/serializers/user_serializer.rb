class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :prof_pic
end
