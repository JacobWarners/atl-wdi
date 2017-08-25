class CreateDrinks < ActiveRecord::Migration[5.1]
  def change
    create_table :drinks do |t|
      t.string :name
      t.boolean :alchoholic
      t.float :ounces

      t.timestamps
    end
  end
end
