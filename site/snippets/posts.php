<?php if (count($posts) === 0): ?>

  <p>Keine Beiträge bisher</p>

<?php else: ?>

  <div class="post-list">
    <?php foreach ($posts as $post): ?>
      <?php snippet('post', [
        'content' => $post->content()->content(),
        'images' => $post->photos(),
        'title' => $post->title(),
        'url' => $post->url(),
      ]) ?>
    <?php endforeach ?>
  </div>

  <?php if ($posts->pagination()->hasPages()): ?>
    <nav class="pagination">
      <?php if ($posts->pagination()->hasPrevPage()): ?>
        <a class="pagination__item" href="<?= $posts->pagination()->prevPageURL() ?>" rel="prev">Neuere</a>
      <?php else: ?>
        <span class="pagination__item">Neuere</span>
      <?php endif ?>

      <?php if ($posts->pagination()->hasNextPage()): ?>
        <a class="pagination__item" href="<?= $posts->pagination()->nextPageURL() ?>" rel="next">Ältere</a>
      <?php else: ?>
        <span class="pagination__item">Ältere</span>
      <?php endif ?>
    </nav>
  <?php endif ?>

<?php endif ?>
