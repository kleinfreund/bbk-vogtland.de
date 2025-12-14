<?php snippet('header') ?>

<?php snippet('posts', [
  'posts' => $page->children()->listed()->flip()->paginate(5),
]) ?>

<?php snippet('footer') ?>
