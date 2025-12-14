<?php

use Kirby\Cms\Page;

class MemberPage extends Page {
  public function cover() {
    return $this->photo()->first();
  }
}
