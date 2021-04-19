using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : ControllerBase
    {
        private static List<KeyValuePair<int, string>> getAllPersons()
        {   var persons = new List<KeyValuePair<int, string>>();
            persons.Add(KeyValuePair.Create<int, string>(1, "João"));
            persons.Add(KeyValuePair.Create<int, string>(2, "Maria"));
            persons.Add(KeyValuePair.Create<int, string>(3, "Ana"));

            return persons;
        }

        private readonly ILogger<ApiController> _logger;

        public ApiController(ILogger<ApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ApiResponse Get(int id)
        {
            return new ApiResponse() {
                success = true,
                data = getAllPersons()
                    .FirstOrDefault(p => p.Key == id)
                    .Value
            };
        }

        [HttpPost]
        public ApiResponse Post(decimal value, int installments)
        {
            decimal total = value * installments;
            decimal fees = (total * 5) / 100;

            return new ApiResponse() {
                success = true,
                data = (total + fees).ToString("R$ 0.00")
            };
        }
    }

    public class ApiResponse {
        public bool success { get; set; }
        public string data { get; set; }
        public string error {get; set; }
    }
}
