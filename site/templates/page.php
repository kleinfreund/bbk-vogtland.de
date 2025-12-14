<?php snippet('header') ?>

<h1><?= $page->title()->esc() ?></h1>
<?= $page->text()->toBlocks() ?>

<?php snippet('footer') ?>
