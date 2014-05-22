# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

Flag.create!(title: "Integration server", state:"up")
Flag.create!(title: "Integration server 2", state:"up")
Flag.create!(title: "Integration server 3", state:"down", reason: "Whooooops")
Flag.create!(title: "Integration server with very very very very long name 4", state:"up")
Flag.create!(title: "Integration server 5", state:"up")
Flag.create!(title: "Integration server 6", state:"up")
Flag.create!(title: "Integration server 7", state:"down", reason: "No good reason.")
Flag.create!(title: "Integration server 8", state:"up")
Flag.create!(title: "Integration server 9", state:"up")
Flag.create!(title: "Integration server 10", state:"up")
Flag.create!(title: "Integration server 11", state:"up")
