# bbk-vogtland.de

## Deploy site & synchronize content

Before deploying the site, make sure you have all current changes and run `composer install` so that Kirby and its dependencies are installed and up-to-date in `kirby/` and `vendor/` respectively.

### Download content

When working with content locally, it's critical to first download the content from the live site. Since content on the live site is managed by a CMS, it's expected that it changes all the time and so, as a general rule, the content in the repository is out-of-date.

```sh
rsync -av --rsh=ssh --delete ${USER}@${HOST}:${DEST_DIR}/bbk-vogtland.de/content/ ${SRC_DIR}/bbk-vogtland.de/content
git add content/
git commit --message "Update content"
git push
```

### Update site changes excluding content

When only changing the site but not its content, it's important to exclude the `content/` directory as you'd otherwise risk deleting content from the live site that's more recent than your local copy.

```sh
rsync -av --rsh=ssh --delete --exclude-from=rsync-exclude-file.list ${SRC_DIR}/bbk-vogtland.de/ ${USER}@${HOST}:${DEST_DIR}/bbk-vogtland.de
```

### Update content excluding site changes

**Note**: Before making changes to local content, make sure to download the current content from the live site first (see [Download content](#download-content)).

```sh
git pull
rsync -av --rsh=ssh --delete ${SRC_DIR}/bbk-vogtland.de/content/ ${USER}@${HOST}:${DEST_DIR}/bbk-vogtland.de/content
```
