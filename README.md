# jekyll-theme-asobi-card

## Installation

1. Add this line to your Jekyll site's `Gemfile`

   ```ruby
   gem "asobi-card", :git => "https://github.com/maehachi08/jekyll-theme-asobi-card.git"
   ```

2. Execute bundle command

   ```
   bundle
   ```

3. Copy plugin and template files to Jekyll site's top dir

   ```
   bash `bundle info --path asobi-card 2>/dev/null`/bin/asobi-card-setup.sh
   ```

4. Add this line to your Jekyll site's `_config.yml`

   ```yaml
   theme: asobi-card
   ```

5. Execute jekyll build

   ```
   bundle exec jekyll build
   ```

## Usage

wip

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `asobi-card.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

