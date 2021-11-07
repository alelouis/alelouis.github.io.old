docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --publish 4000:4000 \
  alelouis/blog \
  bundle exec jekyll serve --host=0.0.0.0

