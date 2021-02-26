# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Client.delete_all

# User seed
    u1 = User.create(email: 'kevin.park02@gmail.com', fname: 'Kevin', lname: 'Park', password: 'test123')
    u2 = User.create(email: 'carol.park@gmail.com', fname: 'Carol', lname: 'Park', password: 'test123')
    
# Client seed
    c1 = Client.create(email: 'ryuta.eguchi@gmail.com', fname: 'Ryuta', lname: 'Eguchi', income: 10000, accountant_id: u1.id)
    c2 = Client.create(email: 'wesley.cheung@gmail.com', fname: 'Wesley', lname: 'Cheung', income: 20000, accountant_id: u1.id)
    c3 = Client.create(email: 'joseph.kompella@gmail.com', fname: 'Joseph', lname: 'Kompella', income: 45000, accountant_id: u1.id)
    c4 = Client.create(email: 'daniel.cheung@gmail.com', fname: 'Daniel', lname: 'Cheung', income: 50000, accountant_id: u1.id)
    c5 = Client.create(email: 'justin.lin@gmail.com', fname: 'Justin', lname: 'Lin', income: 100000, accountant_id: u1.id)
    
    c6 = Client.create(email: 'jasmine.kyung@gmail.com', fname: 'Jasmine', lname: 'Kyung', income: 10000, accountant_id: u2.id)
    c7 = Client.create(email: 'sarah.hutapea@gmail.com', fname: 'Sarah', lname: 'Hutapea', income: 20000, accountant_id: u2.id)
    c8 = Client.create(email: 'victoria.jo@gmail.com', fname: 'Victoria', lname: 'Jo', income: 45000, accountant_id: u2.id)
    c9 = Client.create(email: 'michelle.ou@gmail.com', fname: 'Michelle', lname: 'Ou', income: 50000, accountant_id: u2.id)
    c10 = Client.create(email: 'mabelle.erhahon@gmail.com', fname: 'Mabelle', lname: 'Erhahon', income: 100000, accountant_id: u2.id)
    
    
    
