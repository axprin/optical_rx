require 'rubygems'
require 'sinatra'


get '/' do
  # render home page
  # content_type 'html'
  @users = User.all
  erb :index
end


#----------- USERS -----------

get '/users/new' do
  # render sign-up page
  @user = User.new
  erb :sign_up
end

post '/users' do
  # sign-up
  @user = User.new params[:user]
  if @user.save
    # successfully created new account; set up the session and redirect
    session[:user_id] = @user.id
    redirect "/users/#{current_user.id}"
  else
    # an error occurred, re-render the sign-up form, displaying errors
    erb :sign_up
  end
end

get '/users/:id' do
  # content_type 'html'
  erb :user
end

post '/users/:id/contacts/new' do
  @user = current_user
  @contact = Contact.new
  @contact.r_sph = params[:r_sph_plus] + params[:r_sph_num] + params[:r_sph_dec]
  @contact.l_sph = params[:l_sph_plus] + params[:l_sph_num] + params[:l_sph_dec]
  @contact.r_cyl = params[:r_cyl_plus] + params[:r_cyl_num] + params[:r_cyl_dec]
  @contact.l_cyl = params[:l_cyl_plus] + params[:l_cyl_num] + params[:l_cyl_dec]
  @contact.r_axis = params[:r_axis]
  @contact.l_axis = params[:l_axis]
  @contact.r_bc = params[:r_bc_num] + params[:r_bc_dec]
  @contact.l_bc = params[:l_bc_num] + params[:l_bc_dec]
  @contact.r_diam = params[:r_diam_num] + params[:r_diam_dec]
  @contact.l_diam = params[:l_diam_num] + params[:l_diam_dec]
  @contact.save
  puts @contact
  puts "@contact.id is " + @contact.id.to_s
  puts "@user.id is " + @user.id.to_s
  puts "@contact.r_sph is " + @contact.r_sph.to_s
  puts "@contact.l_sph is " + @contact.l_sph.to_s
  puts "@contact.r_cyl is " + @contact.r_cyl.to_s
  puts "@contact.l_cyl is " + @contact.l_cyl.to_s
  puts "@contact.r_axis is " + @contact.r_axis.to_s
  puts "@contact.l_axis is " + @contact.l_axis.to_s
  puts "@contact.r_bc is " + @contact.r_bc.to_s
  puts "@contact.l_bc is " + @contact.l_bc.to_s
  puts "@contact.r_diam is " + @contact.r_diam.to_s
  puts "@contact.l_diam is " + @contact.l_diam.to_s
  @prescription = Prescription.create user_id: @user.id, prescribable_id: @contact.id, prescribable_type: "Contacts"
  redirect "/users/#{@user.id}"
end

post '/users/:id/eyeglasses/new' do
  @user = current_user
  @eyeglass = Eyeglass.new
  @eyeglass.r_sph = params[:r_sph_plus] + params[:r_sph_num] + params[:r_sph_dec]
  @eyeglass.r_cyl = params[:r_cyl_plus] + params[:r_cyl_num] + params[:r_cyl_dec]
  @eyeglass.r_axis = params[:r_axis]
  @eyeglass.l_sph = params[:l_sph_plus] + params[:l_sph_num] + params[:l_sph_dec]
  @eyeglass.l_cyl = params[:l_cyl_plus] + params[:l_cyl_num] + params[:l_cyl_dec]
  @eyeglass.l_axis = params[:l_axis]
  @eyeglass.save
  @prescription = Prescription.create user_id: @user.id, prescribable_id: @eyeglass.id, prescribable_type: "Eyeglasses" 
  puts "@user.id is " + @user.id.to_s
  puts "@eyeglass.r_sph is " + @eyeglass.r_sph.to_s 
  puts "@eyeglass.r_cyl is " + @eyeglass.r_cyl.to_s
  puts "@eyeglass.r_axis is " + @eyeglass.r_axis.to_s
  puts "@eyeglass.l_sph is " + @eyeglass.l_sph.to_s
  puts "@eyeglass.l_cyl is " + @eyeglass.l_cyl.to_s
  puts "@eyeglass.l_axis is " + @eyeglass.l_axis.to_s 
  puts "@eyeglass.id is " + @eyeglass.id.to_s
  redirect "/users/#{@user.id}"
end


#----------- SESSIONS -----------

get '/sessions/new' do
  # render sign-in page
  @email = nil
  erb :sign_in
end

post '/sessions' do
  # sign-in
  @email = params[:email]
  user = User.authenticate(@email, params[:password])
  if user
    # successfully authenticated; set up session and redirect
    session[:user_id] = user.id
    redirect "/users/#{current_user.id}"
  else
    # an error occurred, re-render the sign-in form, displaying an error
    @error = "Invalid email or password."
    erb :sign_in
  end
end

delete '/sessions/:id' do
  # sign-out -- invoked via AJAX
  return 401 unless params[:id].to_i == session[:user_id].to_i
  session.clear
  200
end
