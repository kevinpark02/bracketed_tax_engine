json.partial! 'api/users/user', user: @user

json.clients do 
    @user.clients.each do |client|
        json.set! client.id do
            json.extract! client, :id, :email, :fname, :lname, :income, :accountant_id
        end
    end
end

json.brackets do
    @user.brackets.each do |bracket|
        json.set! bracket.boundary do
            json.extract! bracket, :id, :boundary_type, :boundary, :rate, :accountant_id
        end
    end
end