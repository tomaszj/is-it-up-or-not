class AddInvestigatingFlag < ActiveRecord::Migration
  def change
    add_column :flags, :person_investigating, :string, default: ""
    add_column :flags, :investigating, :boolean, default: false
  end
end