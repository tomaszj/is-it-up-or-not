class AddMergeAndPromoteStatusToFlag < ActiveRecord::Migration
  def change
    add_column :flags, :mergeable, :boolean, default: false
    add_column :flags, :merge_status, :string, default: "ok"
    add_column :flags, :promotable, :boolean, default: false
    add_column :flags, :can_promote, :boolean, default: false
  end
end
