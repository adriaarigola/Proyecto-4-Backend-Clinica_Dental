#############################################################
### EJECUTAR UNA VEZ ###
# crear la base de datos
sequelize db:create


# crear modelo Appointment
sequelize model:generate --name Appointment --attributes 'id_dentist:integer, id_patient:integer, date:dateonly,
time:date'

# crear modelo Dentist
sequelize model:generate --name Dentist --attributes 'id_user:integer'

#crear modelo Patient
sequelize model:generate --name Patient --attributes 'id_user:integer'

#crear modelo Role
sequelize model:generate --name Role --attributes 'role:string'

# crear modelo User
sequelize model:generate --name User --attributes 'user_name:string,user_last_name:string,birthday:date,email:string,password:string,phone:integer,address:string,id_role:integer'

# las tablas intermedias en una relacion N:N no llevan modelo, pero si llevan migracion


#############################################################

# ejecutar migracion
sequelize db:migrate
sequelize db:migrate --to 01-create-student.js

# revertir migracion
sequelize db:migrate:undo
sequelize db:migrate:undo:all

# crear seed
sequelize seed:generate --name seed-student

# ejecutar seed
sequelize db:seed:all
sequelize db:seed --seed 01-seed-student.js