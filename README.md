# uuid.alemayhu.com

Simple website to ease generating a UUID.

The project uses [Dinatra][0] for serving the requests.
For the UUID generation I am using [deno-uuid][1].

## Layout

There are three endpoints being handled

- GET `/`, renders a HTML page with the UUID as heading one
- GET `/json`, returns a json payload with the UUID
- GET `/*`, returns 500

[0]: https://github.com/syumai/dinatra
[1]: https://github.com/lucascaro/deno-uuid
