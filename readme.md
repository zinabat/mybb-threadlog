# Accessing the threadlog

In case you lose the link for some reason, threadlogs can be accessed with the following link (sub UID with the user ID you'd like to view):

	<a href="misc.php?action=threadlog&uid=UID">Click me!</a>

# Template Variables

## threadlog_page

<dl>
	<dt>{$threadlog_list}</dt>
	<dd>outputs either <code>threadlog_row</code> or <code>threadlog_nothreads</code></dd>

	<dt>{$multipage}</dt>
	<dd>outputs MyBB pager</dd>

	<dt>{$count_total}</dt>
	<dd>outputs total number of threads</dd>

	<dt>{$count_closed}</dt>
	<dd>outputs number of closed threads</dd>

	<dt>{$count_replies}</dt>
	<dd>outputs number of threads awaiting a reply from specified user</dd>

	<dt>{$count_active}</dt>
	<dd>outputs number of active threads</dd>
</dl>

## threadlog_row

<dl>
	<dt>{$threadlog_status}</dt>
	<dd>outputs "closed", "needs-reply", or "active"</dd>
	
	<dt>{$thread_title}</dt>
	<dd>outputs an anchor tag with the thread subject</dd>

	<dt>{$thread_participants}</dt>
	<dd>outputs comma-separated list of participants, excluding the current user</dd>

	<dt>{$thread_date}</dt>
	<dd>outputs date thread was started</dd>

	<dt>{$thread_latest_poster}</dt>
	<dd>outputs link to the user who last posted</dd>

	<dt>{$thread_latest_date}</dt>
	<dd>outputs date of last post</dd>

	<dt>{$thread_prefix}</dt>
	<dd>outputs prefix of thread</dd>
</dl>

## threadlog_nothreads

This template has no variables.

# Upgrading

1. Backup your templates somewhere safe.
1. Uninstall the old threadlog completely.
2. Install new threadlog, overwriting all files.
3. Update templates to your liking.

# Todo

- [ ] Javascript sort by which need replies
- [ ] Pagination