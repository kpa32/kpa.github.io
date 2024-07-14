import{_ as s,o as n,c as a,a6 as p}from"./chunks/framework.DnJfIKBR.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"post/AOSP/AOSP-隐藏调试.md","filePath":"post/AOSP/AOSP-隐藏调试.md","lastUpdated":1720977595000}'),t={name:"post/AOSP/AOSP-隐藏调试.md"},e=p(`<div class="language-patch vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">patch</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>diff --git a/fs/proc/array.c b/fs/proc/array.c</span></span>
<span class="line"><span>index 49283b8103c7..2a5d9e6b1afc 100644</span></span>
<span class="line"><span>--- a/fs/proc/array.c</span></span>
<span class="line"><span>+++ b/fs/proc/array.c</span></span>
<span class="line"><span>@@ -128,8 +128,10 @@ static const char * const task_state_array[] = {</span></span>
<span class="line"><span> 	&quot;R (running)&quot;,		/* 0x00 */</span></span>
<span class="line"><span> 	&quot;S (sleeping)&quot;,		/* 0x01 */</span></span>
<span class="line"><span> 	&quot;D (disk sleep)&quot;,	/* 0x02 */</span></span>
<span class="line"><span>-	&quot;T (stopped)&quot;,		/* 0x04 */</span></span>
<span class="line"><span>-	&quot;t (tracing stop)&quot;,	/* 0x08 */</span></span>
<span class="line"><span>+	//&quot;T (stopped)&quot;,		/* 0x04 */</span></span>
<span class="line"><span>+	//&quot;t (tracing stop)&quot;,	/* 0x08 */</span></span>
<span class="line"><span>+	&quot;S (sleeping)&quot;,			//替换</span></span>
<span class="line"><span>+	&quot;S (sleeping)&quot;,			//替换</span></span>
<span class="line"><span> 	&quot;X (dead)&quot;,		/* 0x10 */</span></span>
<span class="line"><span> 	&quot;Z (zombie)&quot;,		/* 0x20 */</span></span>
<span class="line"><span> 	&quot;P (parked)&quot;,		/* 0x40 */</span></span>
<span class="line"><span>@@ -180,6 +182,7 @@ static inline void task_state(struct seq_file *m, struct pid_namespace *ns,</span></span>
<span class="line"><span> 	seq_puts(m, &quot;State:\\t&quot;);</span></span>
<span class="line"><span> 	seq_puts(m, get_task_state(p));</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>+	tpid=0; //修改racerpid 永远为0</span></span>
<span class="line"><span> 	seq_put_decimal_ull(m, &quot;\\nTgid:\\t&quot;, tgid);</span></span>
<span class="line"><span> 	seq_put_decimal_ull(m, &quot;\\nNgid:\\t&quot;, ngid);</span></span>
<span class="line"><span> 	seq_put_decimal_ull(m, &quot;\\nPid:\\t&quot;, pid_nr_ns(pid, ns));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>diff --git a/fs/proc/base.c b/fs/proc/base.c</span></span>
<span class="line"><span>index e1105906fdd0..95c9cb148000 100644</span></span>
<span class="line"><span>--- a/fs/proc/base.c</span></span>
<span class="line"><span>+++ b/fs/proc/base.c</span></span>
<span class="line"><span>@@ -406,6 +406,11 @@ static int proc_pid_wchan(struct seq_file *m, struct pid_namespace *ns,</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> 	wchan = get_wchan(task);</span></span>
<span class="line"><span> 	if (wchan &amp;&amp; !lookup_symbol_name(wchan, symname)) {</span></span>
<span class="line"><span>+</span></span>
<span class="line"><span>+		if(strstr(symname,&quot;trace&quot;)){</span></span>
<span class="line"><span>+			seq_puts(m, &quot;sys_epoll_wait&quot;);</span></span>
<span class="line"><span>+			return 0;</span></span>
<span class="line"><span>+		}</span></span>
<span class="line"><span> 		seq_puts(m, symname);</span></span>
<span class="line"><span> 		return 0;</span></span>
<span class="line"><span> 	}</span></span></code></pre></div>`,1),l=[e];function c(i,o,u,_,r,d){return n(),a("div",null,l)}const f=s(t,[["render",c]]);export{m as __pageData,f as default};
