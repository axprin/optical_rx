class CreatePrescriptions < ActiveRecord::Migration
	def change
    create_table :prescriptions do |t|
      t.integer :user_id
      t.integer :prescribable_id
      t.string :prescribable_type
 
      t.timestamps
    end
  end
end
