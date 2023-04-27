using System.ComponentModel.DataAnnotations;

namespace test45.DTO
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
