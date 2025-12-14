<?php if (count($members) === 0): ?>

  <p>Keine Mitglieder bisher</p>

<?php else: ?>

  <?php foreach ($members as $member): ?>
    <?php snippet('member', [
      'content' => $member->text(),
      'images' => $member->examples(),
      'title' => $member->title(),
      'photo' => $member->photo()->toFiles()->first(),
    ]) ?>
  <?php endforeach ?>

<?php endif ?>
