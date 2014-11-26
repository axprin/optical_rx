class Prescription < ActiveRecord::Base
  validates :user_id, :presence => true
  validates :prescribable_id, :presence => true
  validates :prescribable_type, :presence => true

  belongs_to :user
  belongs_to :prescribable, :polymorphic => true
  belongs_to :eyeglass, :class_name => "Eyeglass",
                        :foreign_key => "prescribable_id"
  belongs_to :contact,  :class_name => "Contact",
                        :foreign_key => "prescribable_id"

end
