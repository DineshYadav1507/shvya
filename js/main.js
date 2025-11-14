(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        dotsData: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    function myMove() {
        let id = null;
        const elem = document.getElementById("animate");   
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
      }


   

})(jQuery);



// Sectino Start The Problem Most Businesses Face: The System Gap

/* OPEN/CLOSE ANIMATION */
document.querySelectorAll(".sysgap-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("sysgap-open");
  });
});

// Eco Sytem start

/* ========================
   Shyva Ecosystem - JS (animated)
   Place before </body>
   ======================== */

// Configure nodes: edit labels, optional sub text, color class, and icon (emoji or HTML/SVG)
const nodes = [
  { label: 'Shyva CRM', sub: '', color: 'c-blue', icon: '🤝' },
  { label: 'Shyva HRM + Payroll', sub: '', color: 'c-green', icon: '🧾' },
  { label: 'Shyva Inventory', sub: '', color: 'c-orange', icon: '📦' },
  { label: 'Smart Billing', sub: '', color: 'c-pink', icon: '💳' },
  { label: 'Restaurant / 3rd ERP', sub: '', color: 'c-purple', icon: '🍽️' },
  { label: 'Inventory System', sub: '', color: 'c-teal', icon: '🏬' },
  { label: 'AI Engine', sub: '', color: 'c-blue', icon: '🤖' },
  { label: 'Marketing CRM', sub: '', color: 'c-green', icon: '📈' }
];

const wrap = document.getElementById('radialWrap');
const connectors = document.getElementById('connectors');
const tooltip = document.getElementById('tooltip');

function createNodes() {
  // cleanup old
  document.querySelectorAll('.node').forEach(n => n.remove());
  connectors.innerHTML = '';

  const rect = wrap.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const radius = Math.min(rect.width, rect.height) * 0.36;

  connectors.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);

  nodes.forEach((n, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;

    const el = document.createElement('div');
    el.className = 'node';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    // Give each node a randomized float amplitude and period (so motion is organic)
    // fx, fy are pixel offsets for the float animation; period is duration
    const fx = (Math.random() * 18 + 6) * (Math.random() > 0.5 ? 1 : -1); // ±(6..24)px
    const fy = (Math.random() * 12 + 4) * (Math.random() > 0.5 ? 1 : -1); // ±(4..16)px
    const period = (Math.random() * 4 + 5).toFixed(2) + 's'; // 5..9s

    // set CSS custom properties used by CSS keyframes
    el.style.setProperty('--fx', fx + 'px');
    el.style.setProperty('--fy', fy + 'px');
    el.style.setProperty('--period', period);
    // optional small phase shift by animationDelay
    el.style.animationDelay = (Math.random() * 1.2).toFixed(2) + 's';

    el.innerHTML = `
      <div class="icon ${n.color}" aria-hidden="true">${n.icon}</div>
      <div>
        <div class="label">${n.label}</div>
        ${n.sub ? `<div class="sub">${n.sub}</div>` : ''}
      </div>
    `;

    // interactions
    el.addEventListener('mouseenter', () => {
      showTooltip(n.label, x, y);
      highlightLine(i, true);
    });
    el.addEventListener('mouseleave', () => {
      hideTooltip();
      highlightLine(i, false);
    });
    el.addEventListener('click', () => {
      alert(`${n.label} clicked — open module or page.`);
    });

    wrap.appendChild(el);

    // connector path (with subtle curve)
    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    const startX = cx;
    const startY = cy;
    const cx1 = cx + (x - cx) * 0.45;
    const cy1 = cy + (y - cy) * 0.45;
    const d = `M ${startX} ${startY} Q ${cx1} ${cy1} ${x} ${y}`;
    path.setAttribute('d', d);
    path.setAttribute('fill','none');
    path.setAttribute('stroke','#dbeafe');
    path.setAttribute('stroke-width','2');
    path.setAttribute('data-index', i);
    path.style.opacity = '0.95';
    // initial dash offset (large) - the CSS will animate to 0
    path.style.strokeDasharray = '1000';
    path.style.strokeDashoffset = '1000';
    connectors.appendChild(path);

    // schedule per-path draw animation with small stagger
    setTimeout(() => {
      // measure path length and animate stroke-dashoffset to zero
      const len = path.getTotalLength ? path.getTotalLength() : 1000;
      path.style.strokeDasharray = len;
      path.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.2,.9,.2,1), opacity 300ms';
      path.style.strokeDashoffset = '0';
    }, 120 * i + 200);
  });

  // optional: gentle overall rotation of the whole connectors group (subtle)
  connectors.style.transition = 'transform 12s linear';
  // small oscillation using CSS animation would be more complex; omitted to keep it subtle
}

// tooltip/line helpers (same as before)
function showTooltip(text, x, y) {
  tooltip.textContent = text;
  tooltip.style.display = 'block';
  const wrapRect = wrap.getBoundingClientRect();
  const ttRect = tooltip.getBoundingClientRect();
  let left = x;
  let top = y - (wrapRect.height * 0.12);
  left = Math.max(12 + ttRect.width / 2, Math.min(wrapRect.width - 12 - ttRect.width / 2, left));
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}
function hideTooltip(){ tooltip.style.display = 'none'; }

function highlightLine(index, on) {
  const paths = connectors.querySelectorAll('path');
  const p = paths[index];
  if(!p) return;
  if(on){
    p.setAttribute('stroke','#60a5fa');
    p.setAttribute('stroke-width','3.5');
    p.style.opacity = '1';
  } else {
    p.setAttribute('stroke','#dbeafe');
    p.setAttribute('stroke-width','2');
    p.style.opacity = '0.95';
  }
}

// initial render + responsive re-render
createNodes();
let resizeTimer;
window.addEventListener('resize', ()=> {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(()=> createNodes(), 140);
});



// Animate stat numbers and SVG rings when section scrolls into view
(function(){
  const stats = document.querySelectorAll('.stat');
  let done = false;

  function animateStat(statEl) {
    const target = parseFloat(statEl.getAttribute('data-value') || 0);
    const suffix = statEl.getAttribute('data-suffix') || '';
    const valNode = statEl.querySelector('.stat-val');
    // count-up (longer duration for bigger UI)
    let current = 0;
    const duration = 1100; // slightly slower
    const steps = Math.min(80, Math.ceil(duration / 16));
    const stepVal = target / steps;
    let i = 0;
    const t = setInterval(()=> {
      i++;
      current = Math.min(target, +(current + stepVal).toFixed(1));
      valNode.textContent = (target >= 10 ? Math.round(current) : (+current.toFixed(1)));
      if(i >= steps) {
        clearInterval(t);
        valNode.textContent = (target >= 10 ? Math.round(target) : target);
      }
    }, duration / steps);

    // draw ring
    const ring = statEl.querySelector('.ring');
    const r = ring.getAttribute('r');
    const circumference = 2 * Math.PI * r;
    ring.style.strokeDasharray = circumference;
    const percent = statEl.getAttribute('data-suffix') === '%' ? Math.min(100, target) : 100;
    const offset = circumference * (1 - (percent / 100));
    ring.style.transition = 'stroke-dashoffset 1000ms cubic-bezier(.2,.9,.2,1)';
    requestAnimationFrame(()=> {
      ring.style.strokeDashoffset = offset;
    });
  }

  function onIntersect(entries) {
    entries.forEach(entry => {
      if(entry.isIntersecting && !done) {
        stats.forEach(s => animateStat(s));
        done = true;
      }
    });
  }

  const observer = new IntersectionObserver(onIntersect, {threshold:0.28});
  const targetNode = document.querySelector('#shyva-benefits');
  if(targetNode) observer.observe(targetNode);
  else {
    stats.forEach(s => animateStat(s));
  }
})();


