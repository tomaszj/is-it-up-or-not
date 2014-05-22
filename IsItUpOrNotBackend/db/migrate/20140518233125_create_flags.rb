class CreateFlags < ActiveRecord::Migration
  def change
    create_table :flags do |t|
      t.string  :title
      t.string  :state
      t.string  :reason
      t.timestamps
    end
  end
end
