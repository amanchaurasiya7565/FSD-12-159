# File System (FS Module)
 fs module directly communicate with os reither than browser the common operation on a file or a folder are 
 1. write  file, read file ,append file
 2. folder -> mkdir/md,rmdir/em ,readdir
 3. File metadata -> stat ,lstat ,rstat
 1. watch -> watch unwatch
 5. stream -> readstream,write stream

 all function are promise so it must be called with await keyword
 # Write
 - it always create a new file then write the text. 
 # Apend
- it means when we apend then previous file append text without removing previous.
# Read 
- it's  read the file .
# Try-catch-finally-throw(these are block)
- 
# CRUD
- Create Retrive Update Delete
# CRUD Project 
assume we are making a cart related project 
1. user can add any project (id, name,price ,qty) into cart 
2. user can see all the items of cart 
3. user can remove item from cart 
4. user can also update quanity of product 
5. all the items should be stored after temination of project 