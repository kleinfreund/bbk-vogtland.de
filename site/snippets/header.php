<!DOCTYPE html>
<html lang="de" class="page">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title><?php if ($page->title()): ?><?= $page->title()->esc() ?> – <?php endif ?><?= $site->title()->esc() ?></title>

  <meta name="description" content="<?php if ($page->description()): ?><?= $page->description()->esc() ?><?php else: ?><?= $site->description()->esc() ?><?php endif ?>">

  <?= css([
    'assets/css/main.css',
    '@auto'
  ]) ?>
</head>

<body>

  <div class="container">
    <header class="site-header">
      <a href="/" class="site-logo">
        <img
          src="<?= asset('assets/img/logo.png')->url() ?>"
          alt="<?= esc($site->logo_alt(), 'attr') ?>"
        >
      </a>

      <a href="#mn" class="mobile-nav-toggle">Menü</a>

      <nav>
        <ul class="nav  site-nav  site-nav--desk">
          <?php foreach ($site->links()->yaml() as $link): ?>
            <?php $page_object = $kirby->page($link) ?>
            <?php if ($page_object->template()->name() == 'page' || $page_object->children()->isNotEmpty()): ?>
              <li>
                <a class="site-nav__item" href="<?= $page_object->url() ?>">
                  <?= $page_object->title()->esc() ?>
                </a>
              </li>
            <?php endif; ?>
          <?php endforeach; ?>
        </ul>
      </nav>

      <div class="bbk-member-note">
        <div class="tooltip  tooltip--bbk" data-tooltip="Mitglied im Sächsischen Künstlerbund sowie im Bundesverband Bildender Künstlerinnen und Künstler">
          <img src="<?= asset('assets/img/bbk-logo.webp')->url() ?>" alt="BBK Mitglied">
        </div>
      </div>
    </header>

    <main class="page-content">
      <div class="wrapper">
