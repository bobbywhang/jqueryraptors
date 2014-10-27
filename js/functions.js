$(function() {
    var sortlists = $("#playerstarting, #playerbench").sortable({
        tolerance: 'pointer',
        connectWith: '#playerstarting, #playerbench',
        helper: 'original',
        scroll: true,
        over: function(event, ui) {
            ui.item.data('sortableItem').scrollParent = ui.placeholder.parent();
            ui.item.data('sortableItem').overflowOffset = ui.placeholder.parent().offset();
        }
    });
});