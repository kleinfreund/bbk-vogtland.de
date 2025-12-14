<article class="post">
  <h2>
    <a href="<?= esc($url, 'attr') ?>"><?= $title->esc() ?></a>
  </h2>

  <?= $content->toBlocks() ?>

  <?php if ($images->isNotEmpty()): ?>
    <?php foreach ($images->toFiles() as $image): ?>
      <figure>
        <img
          src="<?= esc($image->url(), 'attr') ?>"
          alt="<?= esc($image->alt()->esc(), 'attr') ?>"
        >

        <?php if ($image->caption()->isNotEmpty()): ?>
          <figcaption>
            <?= $image->caption()->esc()->nl2br() ?>
          </figcaption>
        <?php endif ?>
      </figure>
    <?php endforeach ?>
  <?php endif ?>
</article>
