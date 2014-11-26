class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|

      t.float :r_sph
      t.float :r_cyl
      t.integer :r_axis
      t.float :r_bc
      t.float :r_diam
      t.float :l_sph
      t.float :l_cyl
      t.integer :l_axis
      t.float :l_bc
      t.float :l_diam
      
      t.timestamps
    end
  end
end
