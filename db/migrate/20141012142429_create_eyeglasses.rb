class CreateEyeglasses < ActiveRecord::Migration
  def change
    create_table :eyeglasses do |t|

      t.float :r_sph
      t.float :r_cyl
      t.integer :r_axis
      t.float :l_sph
      t.float :l_cyl
      t.integer :l_axis
      
      t.timestamps
    end
  end
end