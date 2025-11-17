// ------------------------------
// 탭 네비게이션 + 해시 기반 자동 탭 활성화 완성 코드
// ------------------------------

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        const tabButtons = document.querySelectorAll('.tab-button[data-tab]');
        const tabContents = document.querySelectorAll('.tab-content');

        // ------------------------------
        // 탭 전환 함수
        // ------------------------------
        function activateTab(tabName) {
            // 버튼 active 처리
            tabButtons.forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
            });

            // 콘텐츠 표시 처리
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabName) {
                    content.classList.add('active');
                }
            });
        }

        // ------------------------------
        // 탭 버튼 클릭 이벤트
        // ------------------------------
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const tabName = this.getAttribute('data-tab');
                activateTab(tabName);
            });
        });

        // ------------------------------
        // URL 해시(#eatonhwan 등) 자동 탭 열기
        // ------------------------------
        const hash = window.location.hash.replace('#', '').trim(); 
        if (hash) {
            // index.html#eatonhwan → "eatonhwan"
            const targetTab = document.querySelector(`.tab-button[data-tab="${hash}"]`);
            if (targetTab) {
                activateTab(hash);

                // 스크롤 이동 보정
                const sectionEl = document.getElementById(hash);
                if (sectionEl) {
                    sectionEl.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    });
})();
