using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using project56.model;

namespace project56.Controllers
{
    [Route("UserController")]
    public class UserController : Controller 
    {
        private readonly LegoContext _context;

        public UserController(LegoContext context) 
        {
            _context = context;
        }
        
        [HttpGet("Users")]
        public ClassUser[] allUsers() 
        {
            return _context.Users.ToArray();
        }

        [HttpPost("CreateUser/{firstname}")]
        public void CreateUser(string firstname)
        {
            ClassUser newuser = new ClassUser() { FirstName = firstname,
                                            LastName = "greg",
                                            UserName = "greg",
                                            EmailAdress = "greg",
                                            Password = "greg",
                                            Adress = "greg",
                                            PhoneNumber = "greg",
                                            country = "greg",
                                            date_of_birth = "greg",
                                            Gender = "greg"};
            _context.Users.Add(newuser);
            _context.SaveChanges();
        }

        [HttpGet("Login/{username}/{password}")]
        public ClassUser Login(string username, string password) 
        {
            var loggingIn = from _login in _context.Users
                            where _login.UserName == username && _login.Password == password
                            select _login;
            return loggingIn.FirstOrDefault();
        }
    }
}