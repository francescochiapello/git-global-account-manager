# git-account-manager

Nodejs tool useful to switch between git accounts at global level (~/.gitconfig)

If you have multiple git accounts (eg. Personal account and/or Companies accounts) and you want to code on different projects at the same time on the same machine you should modify *user.name* and *user.email* into *~/.gitconfig* otherwise your commit will be pushed with a wrong name.

Simply create a JSON file under *HOME* path named ~/.gam.json with an array of accounts

```javascript
[
  {
    "name": "John Smith",
    "email": "john.smith@mail.com"
  },
  {
    "name": "John Smith",
    "email": "john@companyone.com"
  },
  {
    "name": "Company Name",
    "email": "develop@companytwo.com"
  }
]
```

then run the command ***gam*** and select *Show configuration* to list actual configured profile or *Set profile :: ...* to configure the desidered one

```javascript
✔  @ Git Account Manager @
? Select Git Account to set as global (Use arrow keys or type to search)
❯ Show configuration
  Set profile :: <John Smith>
  Set profile :: <John Smith>
  Set profile :: <Company Name>
```
