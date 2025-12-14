<?php snippet('header') ?>

<?php snippet('post', [
  'content' => $page->content()->content(),
  'images' => $page->photos(),
  'title' => $page->title(),
  'url' => $page->url(),
]) ?>

<?php snippet('footer') ?>
