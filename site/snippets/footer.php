      </div>
    </main>
  </div>

  <nav>
    <ul class="nav  site-nav  site-nav--mobile" id="mn">
      <?php foreach ($site->links()->yaml() as $link): ?>
        <?php $page_object = $kirby->page($link) ?>
        <?php if ($page_object->template()->name() == 'page' || $page_object->children()->isNotEmpty()): ?>
          <li>
            <a href="<?= $page_object->url() ?>" class="site-nav__item"><?= $page_object->title()->esc() ?></a>
          </li>
        <?php endif; ?>
      <?php endforeach ?>
    </ul>
  </nav>

</body>
</html>
