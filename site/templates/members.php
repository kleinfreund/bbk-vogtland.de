<?php snippet('header') ?>

<?php snippet('members', [
  'members' => $page->children()->listed()->sortBy('name', 'asc'),
]) ?>

<?php snippet('footer') ?>
