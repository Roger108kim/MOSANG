// 탭 네비게이션 기능
(function() {
    'use strict';
    
    // 페이지 로드 완료 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        // 모든 탭 버튼 선택
        const tabButtons = document.querySelectorAll('.tab-button[data-tab]');
        
        // 각 탭 버튼에 클릭 이벤트 리스너 추가
        tabButtons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                // 기본 링크 동작은 유지 (index.html로 이동)
                // active 클래스만 관리
                const tabName = this.getAttribute('data-tab');
                
                // 모든 탭 버튼에서 active 클래스 제거
                tabButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // 클릭된 탭 버튼에 active 클래스 추가
                this.classList.add('active');
            });
        });
    });
})();

