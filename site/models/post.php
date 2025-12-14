<?php

use Kirby\Cms\Page;

class PostPage extends Page {
  public function cover() {
    return $this->content()->get('cover')->toFile() ?? $this->images()->first();
  }
}
