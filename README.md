# uuid.alemayhu.com

Simple website to ease generating a UUID.

The project uses [Dinatra][0] for serving requests and [dejs][2] for the
templating. For the UUID generation I am using [deno-uuid][1]. The styling
is from [Bulma].

## Layout

There are three endpoints being handled

- GET `/`, renders a HTML page with the UUID as heading one
- GET `/json`, returns a json payload with the UUID
- GET `/*`, returns 500

[0]: https://github.com/syumai/dinatra
[1]: https://github.com/lucascaro/deno-uuid
[2]: https://github.com/syumai/dejs
[3]: https://bulma.io/
