using Microsoft.EntityFrameworkCore;
using test45.Entitites;

namespace test45.Data
{
    public class DataContext : DbContext
    {
        public DataContext( DbContextOptions options) : base(options)
        {

        }
        public DbSet<AppUser> Users { get; set; }
    }
}
