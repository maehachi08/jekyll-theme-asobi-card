# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "asobi-card"
  spec.version       = "0.1.0"
  spec.authors       = ["maehachi08"]
  spec.email         = ["maehachi08@gmail.com"]

  spec.summary       = "jekyll theme"
  spec.homepage      = "https://github.com/maehachi08/jekyll-theme-asobi-card"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_layouts|_includes|_sass|_plugins|archives.html|categories.html|tags.html|search.html|search_data.json|LICENSE|README|_config\.yml||bin/asobi-card-setup.sh)!i)
  end

  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency "jekyll-archives"
  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
