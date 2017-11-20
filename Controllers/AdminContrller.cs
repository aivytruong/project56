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
    [Route("AdminController")]
    public class AdminController : Controller 
    {
        private readonly LegoContext _context;
        
        public AdminController(LegoContext context) 
        {
            _context = context;
        }

        [HttpGet("Admins")]
        public Admin[] allAdmins() 
        {
            return _context.Admins.ToArray();
        }
    }
}