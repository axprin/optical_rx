class Eyeglass < ActiveRecord::Base

  validates :r_sph, :presence => true
  validates :r_cyl, :presence => true
  validates :r_axis, :presence => true 
  validates :l_sph, :presence => true
  validates :l_cyl, :presence => true
  validates :l_axis, :presence => true

end

