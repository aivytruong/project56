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

        [HttpPost("CreateUser/{firstName}/{lastName}/{userName}/{emailAdress}/{password}/{adress}/{phoneNumber}/{Country}/{Date_of_birth}/{gender}")]
        public void CreateUser(string firstName, string lastName, string userName, string emailAdress, string password, string adress, string phoneNumber, string Country, string Date_of_birth, string gender)
        {
            ClassUser newuser = new ClassUser() { FirstName = firstName,
                                            LastName = lastName,
                                            UserName = userName,
                                            EmailAdress = emailAdress,
                                            Password = password,
                                            Adress = adress,
                                            PhoneNumber = phoneNumber,
                                            country = Country,
                                            date_of_birth = Date_of_birth,
                                            Gender = gender};
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