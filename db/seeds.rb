require 'faker'

# # create a few users
# 3.times do
#   User.create :name => Faker::Name.name, :email => Faker::Internet.email, :password => 'password'
# end

# User.all.each do |user|
# 	Eyeglass.create :r_sph => 3.75, :r_cyl => 2.25, :r_axis => 27, :l_sph => 2.25, :l_cyl => 3.25, :l_axis => 132
# 	Contact.create :r_sph => 3.75, :r_cyl => 2.25, :r_axis => 27, :r_bc => 7.9, :r_diam => 14.4, :l_sph => 2.25, :l_cyl => 3.25, :l_axis => 132 ,:l_bc => 8.2, :l_diam => 14.2
# end

User.create :name => "Andy", :email => "andy@test.com", :password => "123456"

Contact.create :r_sph => 3.75, :r_cyl => 2.25, :r_axis => 27, :r_bc => 7.9, :r_diam => 14.4, :l_sph => 2.25, :l_cyl => 3.25, :l_axis => 132 ,:l_bc => 8.2, :l_diam => 14.2

Eyeglass.create :r_sph => 3.75, :r_cyl => 2.25, :r_axis => 27, :l_sph => 2.25, :l_cyl => 3.25, :l_axis => 132