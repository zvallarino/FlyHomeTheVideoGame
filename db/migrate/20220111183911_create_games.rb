class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :link
      t.string :picture
      t.string :name

      t.timestamps
    end
  end
end
