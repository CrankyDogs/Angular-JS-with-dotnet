using test45.Entitites;

namespace test45.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
