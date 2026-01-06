self.addEventListener('install',e=>{
e.waitUntil(caches.open('success-cache').then(c=>c.addAll(['./'])))
});