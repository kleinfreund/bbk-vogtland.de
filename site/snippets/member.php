<section>
  <details class="member-card">
    <summary class="member-card__toggle">
      <?php if ($photo): ?>
        <img
          src="<?= esc($photo->url(), 'attr') ?>"
          alt="<?= esc($photo->alt()->esc(), 'attr') ?>"
          class="member-card__thumbnail"
        >
      <?php else: ?>
        <span class="member-card__thumbnail" aria-hidden="true"></span>
      <?php endif ?>

      <h2 class="member-card__title">
        <?= $title->esc() ?>
      </h2>
    </summary>

    <div class="member-card__content">
      <?php if ($images): ?>
        <div class="member-card__images">
          <?php foreach ($images->toFiles() as $image): ?>
            <img
              src="<?= esc($image->url(), 'attr') ?>"
              alt="<?= esc($image->alt()->esc(), 'attr') ?>"
            >
          <?php endforeach ?>
        </div>
      <?php endif ?>

      <?= $content->toBlocks() ?>
    </div>
  </details>
</section>
